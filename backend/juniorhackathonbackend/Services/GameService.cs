using juniorhackathonbackend.Data;
using juniorhackathonbackend.Data.Entities;
using juniorhackathonbackend.Models;
using Microsoft.AspNetCore.Mvc;
using static System.Net.WebRequestMethods;

namespace juniorhackathonbackend.Services
{
    public interface IGameService
    {
        Task<ActionResult<GetGameToStartResponse>> GetGameToStart();
    }

    public class GameService : IGameService
    {
        private readonly ApplicationDbContext _context;
        public GameService(
                ApplicationDbContext context)
        {
            _context = context;
        }

        public async Task<ActionResult<GetGameToStartResponse>> GetGameToStart()
        {
            var newGame = new GameEntity
            {
                Id = Guid.NewGuid(),
                NumberOfCards = 8,
                Created = DateTime.UtcNow
            };
            _context.Games.Add(newGame);

            var res = new GetGameToStartResponse
            {
                GameId = newGame.Id,
                GameCardWithPlacements = new List<CardEntity>()
            };

            var cards = _context.Cards.ToList();

            var randNumb = GetRandomNumber();
            var takenCards = new List<CardEntity>();
            foreach (var item in cards)
            {
                if (item.RandomNum == randNumb)
                {
                    takenCards.Add(item);
                }
            }

            var busyPlacements = new List<Boolean>();
            for (int i = 0; i < newGame.NumberOfCards; i++)
            {
                busyPlacements.Add(false);
                res.GameCardWithPlacements.Add(null);
            }
            var randPlacement = -1;
            var count = 0;

            foreach (var item in takenCards)
            {
                for (int i = 0; i < 2; i++)
                {
                    if (count < newGame.NumberOfCards)
                    {
                        randPlacement = GetRandomPlace(newGame.NumberOfCards);
                        while (busyPlacements[randPlacement])
                        {
                            randPlacement = GetRandomPlace(newGame.NumberOfCards);
                        }
                    }
                    else
                        break;
                    busyPlacements[randPlacement] = true;
                    res.GameCardWithPlacements[randPlacement] = item;
                    count++;
                }
            }


            _context.SaveChanges();
            return res;
        }


        public int GetRandomNumber()
        {
            Random rand = new Random();
            return rand.Next(1, 1);
        }
        public int GetRandomPlace(int numOfPlaces)
        {
            Random rand = new Random();
            return rand.Next(0, numOfPlaces);
        }
    }
}


using Microsoft.AspNetCore.Mvc;
using juniorhackathonbackend.Models;
using juniorhackathonbackend.Services;

namespace juniorhackathonbackend.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class GameController : ControllerBase
    {

        private readonly IGameService _gameService;

        public GameController(IGameService gameService)
        {
            _gameService = gameService;
        }

        [HttpGet]
        [Route("GetGameToStart")]
        public async Task<ActionResult<GetGameToStartResponse>> GetGameToStart()
        {
            return await _gameService.GetGameToStart();
        }

        private static readonly string[] Summaries = new[]
        {   
        "Freezing", "Bracing", "Chilly", "Cool", "Mild", "Warm", "Balmy", "Hot", "Sweltering", "Scorching"
        };

        [HttpGet]
        [Route("GetWeatherForecast")]
        public IEnumerable<WeatherForecast> Get()
        {
            return Enumerable.Range(1, 5).Select(index => new WeatherForecast
            {
                Date = DateOnly.FromDateTime(DateTime.Now.AddDays(index)),
                TemperatureC = Random.Shared.Next(-20, 55),
                Summary = Summaries[Random.Shared.Next(Summaries.Length)]
            })
            .ToArray();
        }
    }
}


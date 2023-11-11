using System;
using juniorhackathonbackend.Data.Entities;

namespace juniorhackathonbackend.Models
{
    public class GetGameToStartResponse
    {
        public Guid GameId { get; set; }

        public List<CardEntity> GameCardWithPlacements { get; set; }
    }
}

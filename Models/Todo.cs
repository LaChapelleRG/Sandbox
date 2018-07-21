using System;

namespace Sandbox.Models
{
    public class Todo
    {
        public int Id { get; set; }
        public string Title { get; set; }
        public string Description { get; set; }
        public bool IsCompleted { get; set; }
        public int Sort { get; set; }
        public DateTime CreateTimestamp { get; set; }
        public DateTime EndTimestamp { get; set; }
        public DateTime RequiredByDate { get; set; }
    }
}

using System;

namespace Sandbox.Models
{
    public partial class Links
    {
        public int Id { get; set; }
        public string DisplayedName { get; set; }
        public string Url { get; set; }
        public DateTime CreateTimestamp { get; set; }
        public bool Visible { get; set; }
        public int Sort { get; set; }
    }
}

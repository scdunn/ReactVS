using System.ComponentModel.DataAnnotations;


namespace ReactVS.Core.Domain
{


    public partial class ClassifiedAd
    {

        public int Id { get; set; }

        [StringLength(30)]
        public string Title { get; set; }
        
        public decimal Price { get; set; }

    }
}

namespace ReactVS.Core.Domain
{
    using System;
    using System.Collections.Generic;
    using System.ComponentModel.DataAnnotations;
    using System.ComponentModel.DataAnnotations.Schema;
    using System.Data.Entity.Spatial;

    public partial class Student
    {
      
        public int Id { get; set; }

        [StringLength(25)]
        public string FirstName { get; set; }

        [StringLength(30)]
        public string LastName { get; set; }

    }
}

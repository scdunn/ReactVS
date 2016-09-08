using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using ReactVS.Core.Domain;
using ReactVS.Core.Interfaces;

namespace ReactVS.Core.Data
{

    

    public class ClassifiedAdsRepository : Repository<ClassifiedAd>, IClassifiedAdsRepository
    {
        public ClassifiedAdsRepository(DataContext context) 
            : base(context)
        {
        }


        public DataContext DataContext
        {
            get { return Context as DataContext; }
        }
    }
}
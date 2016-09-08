using ReactVS.Core.Data;
using ReactVS.Core.Domain;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace ReactVS.Api.Controllers
{
    public class ClassifiedAdsController : ApiController
    {
        // GET api/values
        public IEnumerable<ClassifiedAd> Get()
        {
            var ctx = new UnitOfWork(new DataContext());
            return ctx.ClassifiedAds.GetAll().ToArray<ClassifiedAd>();
        }

        // GET api/values/5
        public string Get(int id)
        {
            return "value";
        }

        // POST api/values
        public void Post([FromBody]string value)
        {
        }

        // PUT api/values/5
        public void Put(int id, [FromBody]string value)
        {
        }

        // DELETE api/values/5
        public void Delete(int id)
        {
        }
    }
}

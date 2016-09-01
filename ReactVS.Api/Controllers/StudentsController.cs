using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using ReactVS.Core.Domain;
using ReactVS.Core.Data;

namespace ReactVS.Api.Controllers
{
    public class StudentsController : ApiController
    {
        // GET api/<controller>
        public IEnumerable<Student> Get()
        {
            var ctx = new UnitOfWork(new DataContext());
            return ctx.Students.GetAll().ToArray<Student>();
            
        }

        // GET api/<controller>/5
        public string Get(int id)
        {
            return "value";
        }

        // POST api/<controller>
        public IHttpActionResult Post([FromBody()] Student value)
        {
            var val = value.FirstName;

            var work = new UnitOfWork(new DataContext());
            work.Students.Add(value);
            work.Complete();

            return Ok();

        }

        // PUT api/<controller>/5
        public void Put(int id, [FromBody]string value)
        {
        }

        // DELETE api/<controller>/5
        public void Delete(int id)
        {
        }
    }
}
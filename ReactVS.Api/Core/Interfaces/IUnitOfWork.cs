using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace ReactVS.Core.Interfaces
{
    public interface IUnitOfWork : IDisposable
    {
        IStudentRepository Students { get; }
        IUserRepository Users { get; }
        int Complete();
    }
}
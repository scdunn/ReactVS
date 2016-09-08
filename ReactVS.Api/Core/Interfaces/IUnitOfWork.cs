using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace ReactVS.Core.Interfaces
{
    public interface IUnitOfWork : IDisposable
    {
        IClassifiedAdsRepository ClassifiedAds { get; }
        IStudentRepository Students { get; }
        IUserRepository Users { get; }
        int Complete();
    }
}
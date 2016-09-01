using System;
using System.Collections.Generic;
using System.Linq;
using System.Security.Claims;
using System.Threading.Tasks;
using Microsoft.AspNet.Identity;
using Microsoft.AspNet.Identity.EntityFramework;
using Microsoft.AspNet.Identity.Owin;
using Microsoft.Owin.Security;
using Microsoft.Owin.Security.Cookies;
using Microsoft.Owin.Security.OAuth;
using ReactVS.Core.Domain;
using ReactVS.Core.Data;

namespace ReactVS.Api.Providers
{

    public class BasicAuthorizationProvider : OAuthAuthorizationServerProvider
    {
        public override async Task ValidateClientAuthentication(OAuthValidateClientAuthenticationContext context)
        {
            // OAuth2 supports the notion of client authentication
            // this is not used here
            context.Validated();
        }

        public override async Task GrantResourceOwnerCredentials(OAuthGrantResourceOwnerCredentialsContext context)
        {
            // validate user credentials (demo!)
            // user credentials should be stored securely (salted, iterated, hashed yada)
            //var db = new AppContext();
            var hashedPassword = context.Password;

            //var user = db.Users.FirstOrDefault(u => (u.Email == context.UserName || u.Name == context.UserName) && u.Password == hashedPassword);
            
            var ctx = new UnitOfWork(new DataContext());
            var user = ctx.Users.Find(m => m.Username == context.UserName && m.Password == context.Password).FirstOrDefault();

            
            if (user == null)
            {
                context.SetError("invalid_grant", "The user name or password is incorrect.");
                context.Rejected();
                return;
            }

            // create identity
            var id = new ClaimsIdentity(context.Options.AuthenticationType);
            id.AddClaim(new Claim(ClaimTypes.Name, context.UserName));
            //user.UserRoles.ToList().ForEach(ur => {
            //    id.AddClaim(new Claim(ClaimTypes.Role, ur.RoleId));
            //});

            context.Validated(id);
        }
    }
}

namespace Hol.API.SignalR
{
    public class MessageTracker
    {
        private static readonly Dictionary<int, List<string>> OnlineUsers =
                    new Dictionary<int, List<string>>();

        private static readonly Dictionary<int, List<string>> Notificatrion =
                          new Dictionary<int, List<string>>();
        public async Task<bool> UserConnected(int username, string connectionId)
        {
            bool isOnline = false;
            lock (OnlineUsers)
            {
                if (OnlineUsers.ContainsKey(username))
                {
                    OnlineUsers[username].Add(connectionId);
                }
                else
                {
                    OnlineUsers.Add(username, new List<string> { connectionId });
                    isOnline = true;
                }
                var usercode = Convert.ToInt32(username);
            }

            return await Task.FromResult(isOnline);
        }

        public Task<bool> UserDisconnected(int username, string connectionId)
        {
            bool isOffline = false;
            lock (OnlineUsers)
            {
                if (!OnlineUsers.ContainsKey(username)) return Task.FromResult(isOffline);

                OnlineUsers[username].Remove(connectionId);
                if (OnlineUsers[username].Count == 0)
                {
                    OnlineUsers.Remove(username);
                    isOffline = true;
                }
            }
            return Task.FromResult(isOffline);
        }

        public Task<List<string>> GetConnectionsForUser(int username)
        {
            List<string> connectionIds;
            lock (OnlineUsers)
            {
                connectionIds = OnlineUsers.GetValueOrDefault(username);
            }

            return Task.FromResult(connectionIds);
        }

    }
}
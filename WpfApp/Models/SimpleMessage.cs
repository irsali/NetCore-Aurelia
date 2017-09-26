using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace WpfApp.Models
{
    public class SimpleMessage
    {
        public SimpleMessage(string message)
        {
            Message = message;
        }

        public string Message { get; set; }
    }
}

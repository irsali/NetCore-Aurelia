using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace NetMvcBreeze.Models
{
    /// <summary>
    /// Task to do or done
    /// </summary>
    public class TodoItem
    {

        /// <summary>
        /// Unique id for task
        /// </summary>
        [Key]
        public int Id { get; set; }

        /// <summary>
        /// Task heading
        /// </summary>
        [Required]
        public string Title { get; set; }

        /// <summary>
        /// Description about the task
        /// </summary>
        [MaxLength(100)]
        public string Description { get; set; }

        /// <summary>
        /// When task is created
        /// </summary>
        public DateTime CreatedAt { get; set; } 

        /// <summary>
        /// Is task done
        /// </summary>
        public bool IsDone { get; set; }        

        /// <summary>
        /// Is Archieved
        /// </summary>
        public bool IsArchived { get; set; }    
    }
}

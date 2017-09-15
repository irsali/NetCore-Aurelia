using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace WpfApp.Models
{
    public class FormField
    {
        public int FieldId { get; set; } // helpful when submitting form 
        public string Name { get; set; } // fieldName
        public dynamic Value { get; set; } // user entered or from db
        public string Text { get; set; } // label text
        public ElementEnum ElementId { get; set; }

        //disabled: boolean;

        //// dropdown related fields
        //listId: number | string; // donot use this field if using list field. // for finding dropdown values if element is dropdown
        public IEnumerable<dynamic> List { get; set; } // either use listId or list, in this sample app. first form and second form uses listId whereas third form used list.
        //textValueInList: any; //{ text: 'Name', value: 'Value' }; // for dropdowns default template read data from an object properties named as text and value.

        //validation: {
        //    required: boolean;
        //    maxLength: null | number;
        //    minLength: null | number;
        //    email: boolean;
        //} | any;
    }
}

using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
        using Newtonsoft.Json;

namespace WpfApp.Models.ScreenData
{
    // To parse this JSON data, add NuGet 'Newtonsoft.Json' then do:
    //
    //    var data = ScreenData.Convert.FromJson(jsonString);
    //
        public class ScreenData
        {
            [JsonProperty("fields")]
            public Fields[][] Fields { get; set; }

            [JsonProperty("fieldLists")]
            public FieldLists[][] FieldLists { get; set; }

            [JsonProperty("screen")]
            public Screen[][] Screen { get; set; }

            [JsonProperty("screenLinks")]
            public ScreenLinks[][] ScreenLinks { get; set; }
        }

        public struct Fields
        {
            public string String;
            public string[] UnionArray;

            public Fields(JsonReader reader, JsonSerializer serializer)
            {
                String = null;
                UnionArray = null;

                switch (reader.TokenType)
                {
                    case JsonToken.String:
                    case JsonToken.Date:
                        String = serializer.Deserialize<string>(reader);
                        break;
                    case JsonToken.StartArray:
                        UnionArray = serializer.Deserialize<string[]>(reader);
                        break;
                    default: throw new Exception("Cannot convert Fields");
                }
            }

            public void WriteJson(JsonWriter writer, JsonSerializer serializer)
            {
                if (String != null)
                {
                    serializer.Serialize(writer, String);
                    return;
                }
                if (UnionArray != null)
                {
                    serializer.Serialize(writer, UnionArray);
                    return;
                }
                throw new Exception("Union must not be null");
            }
        }

        public struct FieldLists
        {
            public string String;
            public string[] UnionArray;

            public FieldLists(JsonReader reader, JsonSerializer serializer)
            {
                String = null;
                UnionArray = null;

                switch (reader.TokenType)
                {
                    case JsonToken.String:
                    case JsonToken.Date:
                        String = serializer.Deserialize<string>(reader);
                        break;
                    case JsonToken.StartArray:
                        UnionArray = serializer.Deserialize<string[]>(reader);
                        break;
                    default: throw new Exception("Cannot convert FieldLists");
                }
            }

            public void WriteJson(JsonWriter writer, JsonSerializer serializer)
            {
                if (String != null)
                {
                    serializer.Serialize(writer, String);
                    return;
                }
                if (UnionArray != null)
                {
                    serializer.Serialize(writer, UnionArray);
                    return;
                }
                throw new Exception("Union must not be null");
            }
        }

        public struct Screen
        {
            public string String;
            public string[] StringArray;

            public Screen(JsonReader reader, JsonSerializer serializer)
            {
                String = null;
                StringArray = null;

                switch (reader.TokenType)
                {
                    case JsonToken.String:
                    case JsonToken.Date:
                        String = serializer.Deserialize<string>(reader);
                        break;
                    case JsonToken.StartArray:
                        StringArray = serializer.Deserialize<string[]>(reader);
                        break;
                    default: throw new Exception("Cannot convert Screen");
                }
            }

            public void WriteJson(JsonWriter writer, JsonSerializer serializer)
            {
                if (String != null)
                {
                    serializer.Serialize(writer, String);
                    return;
                }
                if (StringArray != null)
                {
                    serializer.Serialize(writer, StringArray);
                    return;
                }
                throw new Exception("Union must not be null");
            }
        }

        public struct ScreenLinks
        {
            public string String;
            public string[] StringArray;

            public ScreenLinks(JsonReader reader, JsonSerializer serializer)
            {
                String = null;
                StringArray = null;

                switch (reader.TokenType)
                {
                    case JsonToken.String:
                    case JsonToken.Date:
                        String = serializer.Deserialize<string>(reader);
                        break;
                    case JsonToken.StartArray:
                        StringArray = serializer.Deserialize<string[]>(reader);
                        break;
                    default: throw new Exception("Cannot convert ScreenLinks");
                }
            }

            public void WriteJson(JsonWriter writer, JsonSerializer serializer)
            {
                if (String != null)
                {
                    serializer.Serialize(writer, String);
                    return;
                }
                if (StringArray != null)
                {
                    serializer.Serialize(writer, StringArray);
                    return;
                }
                throw new Exception("Union must not be null");
            }
        }

        public class ScreenConverter : JsonConverter
        {
            // Serialize/deserialize helpers

            public static ScreenData FromJson(string json) => JsonConvert.DeserializeObject<ScreenData>(json, Settings);
            public static string ToJson(ScreenData o) => JsonConvert.SerializeObject(o, Settings);

            // JsonConverter stuff

            public override bool CanConvert(Type t)
            {
                return t == typeof(Screen) || t == typeof(ScreenLinks) || t == typeof(Fields) || t == typeof(FieldLists);
            }

            public override object ReadJson(JsonReader reader, Type t, object existingValue, JsonSerializer serializer)
            {
                if (t == typeof(Screen))
                    return new Screen(reader, serializer);
                if (t == typeof(ScreenLinks))
                    return new ScreenLinks(reader, serializer);
                if (t == typeof(Fields))
                    return new Fields(reader, serializer);
                if (t == typeof(FieldLists))
                    return new FieldLists(reader, serializer);
                throw new Exception("Unknown type");
            }

            public override void WriteJson(JsonWriter writer, object value, JsonSerializer serializer)
            {
                var t = value.GetType();
                if (t == typeof(Screen))
                {
                    ((Screen)value).WriteJson(writer, serializer);
                    return;
                }
                if (t == typeof(ScreenLinks))
                {
                    ((ScreenLinks)value).WriteJson(writer, serializer);
                    return;
                }
                if (t == typeof(Fields))
                {
                    ((Fields)value).WriteJson(writer, serializer);
                    return;
                }
                if (t == typeof(FieldLists))
                {
                    ((FieldLists)value).WriteJson(writer, serializer);
                    return;
                }
                throw new Exception("Unknown type");
            }

            static JsonSerializerSettings Settings = new JsonSerializerSettings
            {
                MetadataPropertyHandling = MetadataPropertyHandling.Ignore,
                DateParseHandling = DateParseHandling.None,
                Converters = { new ScreenConverter() },
            };
        }
    

}

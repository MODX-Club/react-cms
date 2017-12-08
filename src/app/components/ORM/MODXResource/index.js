import {
  GraphQLInt,
  GraphQLString,
  GraphQLList,
  GraphQLObjectType,
  GraphQLInputObjectType,
  GraphQLEnumType,
  GraphQLFloat,
  GraphQLBoolean,
  GraphQLNonNull,
} from 'graphql';

import GraphQLJSON from 'graphql-type-json';

import { List } from 'immutable';


export const MODXResourceFields = {
  id: {
    type: new GraphQLNonNull(GraphQLInt),
    description: "ID",
  },
  pagetitle: {
    type: GraphQLString,
    description: "Заголовок",
  },
  longtitle: {
    type: GraphQLString,
    description: "Длинный заголовок",
  },
  description: {
    type: GraphQLString,
    description: "Описание",
  },
  alias: {
    type: GraphQLString,
    description: "Псевдоним",
  },
  link_attributes: {
    type: GraphQLString,
    description: "Дополнительные атрибуты ссылки",
  },
  parent: {
    type: GraphQLInt,
    description: "ID родительского ресурса",
  },
  template: {
    type: GraphQLInt,
    description: "ID шаблона",
  },
  menuindex: {
    type: GraphQLInt,
    description: "Порядок сортировки в меню",
  },
  menutitle: {
    type: GraphQLString,
    description: "Заголовок в меню",
  },
  content: {
    type: GraphQLString,
    description: "Контент",
  },
  isfolder: {
    type: GraphQLBoolean,
    description: "Флаг, что это контейнер",
  },
  published: {
    type: GraphQLBoolean,
    description: "Опубликован",
  },
  createdby: {
    type: GraphQLInt,
    description: "Кем создан",
  },
  createdon: {
    type: GraphQLInt,
    description: "Дата создания",
  },
  publishedon: {
    type: GraphQLInt,
    description: "Дата публикации",
  },
  publishedby: {
    type: GraphQLInt,
    description: "Кем опубликован",
  },
  pub_date: {
    type: GraphQLInt,
    description: "Дата плановой публикации",
  },
  unpub_date: {
    type: GraphQLInt,
    description: "Дата планового снятия с публикации",
  },
  deleted: {
    type: GraphQLBoolean,
    description: "Удален",
  },
  searchable: {
    type: GraphQLBoolean,
    description: "Доступен для поиска",
  },
  cacheable: {
    type: GraphQLBoolean,
    description: "Кешируемый",
  },
  deletedon: {
    type: GraphQLInt,
    description: "Дата удаления",
  },
  deletedby: {
    type: GraphQLInt,
    description: "Кем удален",
  },
  editedon: {
    type: GraphQLInt,
    description: "Дата редактирования",
  },
  editedby: {
    type: GraphQLInt,
    description: "Кем отредактирован",
  },
  hidemenu: {
    type: GraphQLBoolean,
    description: "Скрыт в меню",
  },
  class_key: {
    type: GraphQLString,
    description: "Класс документа",
  },
  context_key: {
    type: GraphQLString,
    description: "Контекст",
  },
  content_type: {
    type: GraphQLInt,
    description: "Тип контента",
  },
  richtext: {
    type: GraphQLBoolean,
    description: "Используется расширенный редактор",
  },
  uri: {
    type: GraphQLString,
    description: "УРЛ документа",
  },
  uri_override: {
    type: GraphQLBoolean,
    description: "Флаг, что УРЛ заморожен",
  },
  hide_children_in_tree: {
    type: GraphQLBoolean,
    description: "В дереве документов скрывать все дочерние документы",
  },
  show_in_tree: {
    type: GraphQLBoolean,
    description: "Выводить в дереве документов",
  },
  price: {
    type: GraphQLFloat,
    description: "Цена",
  },
  price_old: {
    type: GraphQLFloat,
    description: "Старая цена",
  },
  article: {
    type: GraphQLString,
    description: "Артикул",
  },
  tvs: {
    type: GraphQLJSON,
    description: "Дополнительные поля",
  },
  properties: {
    type: GraphQLJSON,
    description: "Дополнительные свойства документа",
  },
  _other: {
    type: GraphQLJSON,
    description: "Все остальные поля",
  },
};


const MODXResourceType = new GraphQLObjectType({
  name: 'MODXResourceType',
  description: "MODX-документ",
  fields: () => MODXResourceFields,
});


// export const SiteContentArgs = {
//   component: {
//     // type: new GraphQLNonNull(GraphQLString),
//     type: GraphQLString,
//     description: "Исполняемый компонент",
//   },
//   request: {
//     type: new GraphQLNonNull(GraphQLJSON),
//     description: "Параметры запроса",
//   },
//   geo: {
//     type: new GraphQLNonNull(GraphQLJSON),
//     description: "Координаты",
//   },
//   pathname: {
//     type: GraphQLString,
//     description: "Запрошенный УРЛ (Для отладки)",
//   },
//   companyId: {
//     type: GraphQLString,
//     description: "Запрошенная компания (Для отладки)",
//   },
//   city: {
//     type: GraphQLString,
//     description: "Город (Для отладки)",
//   },
// };


export const getList = (source, args, context, info) => {


  const {
  } = args;


  console.log("MODXResourceType info", info);

  const {
    remoteResolver,
  } = context;

  if(!remoteResolver){
    throw("remoteResolver undefined");
  }


  return new Promise(async (resolve, reject) => {

    try{

      const result = await remoteResolver(null, args, context, info);

      resolve( result && List([result]) || null);

    }
    catch(e){
      reject(e);
    }

  });

};


export default MODXResourceType;

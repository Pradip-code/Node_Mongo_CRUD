  import { MongoClient, ObjectId} from 'mongodb'
 // import { MongoClient,  ObjectID }  from "mongodb";
// import mongodb from "mongodb";
// const MongoClient = mongodb.MongoClient;

const connectURL = "mongodb://127.0.0.1:27017";
const DB_name = "Task-manager";

// const id = new ObjectId()
// console.log(id.id.length)
// console.log(id.toHexString().length)
// // console.log(id.getTimestamp())

MongoClient.connect(connectURL, { useNewUrlParser: true }, (error, client) => {
  if (error) {
    return console.log("Connection failed...");
  }
  const db = client.db(DB_name);
   
// delete many and one
db.collection('user1').deleteOne({
      name:"Dushyant"
}).then((result)=> {
      console.log(result)
}).catch((error)=> {
   console.log(error)
})


// updateOne mongoDB
// db.collection('user1').updateOne({
//     _id: new ObjectId('620c95c3d1a1c6722e7388ca')
// },
// {
//     $inc: {
//         age: -1
//     }
// } ).then((result)=> {
//     console.log(result)
// }).catch((error)=> {
//     console.log(error)
// })
// updateMany  task
//   db.collection('user1').updateOne({name:"Peter" 

// },
// {
//      $set: {
//       name: 'Mark'

// }

//   }).then((result) => {
//       console.log(result)
//   }).catch((error) => {
//        console.log(error)
//   })



//   db.collection('user1').findOne ({ name:'Tirth'}, (error,user) => {
//          if(error) {
//            return  console.log("Error occured")
//          } 

//          console.log(user)
//   })

//priovide find and count
//  db.collection('user1').find({age: 22}).toArray((error, client) => {
       
//         console.log(client)
//  })
//  db.collection('user1').find({age: 22}).count((error, client) => {
       
//     console.log(client)
// })
// })


// CRUD create read update delete

// import { MongoClient, ObjectID } from 'mongodb'

// const connectionURL = 'mongodb://127.0.0.1:27017'
// const databaseName = 'Task-manager'

// MongoClient.connect(connectionURL, { useNewUrlParser: true }, (error, client) => {
//     if (error) {
//         return console.log('Unable to connect to database!')
//     }

//     const db = client.db(databaseName)
    
//     db.collection('users1').findOne({ name: 'Rajan' }, (error, user) => {
//         if (error) {
//             return console.log('Unable to fetch')
//         }

//         console.log(user)
//     })

    // db.collection('users').find({ age: 27 }).toArray((error, users) => {
    //     console.log(users)
    // })

    // db.collection('tasks').findOne({ _id: new ObjectID("5c0fec243ef6bdfbe1d62e2f") }, (error, task) => {
    //     console.log(task)
    // })

    // db.collection('tasks').find({ completed: false }).toArray((error, tasks) => {
    //     console.log(tasks)
    // })
})
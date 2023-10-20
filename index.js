import mysql from 'mysql2'
import inquirer from 'inquirer'

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'ILikeButts!',
    database: 'sakila'
})

const init = async () => {
   const answers = await inquirer.prompt([
    {
        type: 'list',
        name: 'action',
        message: 'What do you want to do?',
        choices: ['Search actors', 'Add an actor', 'Update an actor', 'Exit']
    }
   ])


   console.log(answers)
   if (answers.action === 'Search actors') {
    searchActors()
   } else if (answers.action === 'Add an actor') {
    addActor()
   } else if (answers.action === 'Update an actor') {
    updateActor()
   } else {
    process.exit(0)
   }

}

init()

//Read query
// connection.query("SELECT * FROM actor;", function(error, results){
//     if (error) {
//         throw new Error(error)
//     }
//     console.log(results)
// })

//Update an actor
// connection.query(`UPDATE actor SET last_name = "AAAAAA" WHERE actor_id = 193;`, function(error, results) {
//     if (error) {
//         throw new Error(error)
//     }
//     //See the updated actor
    // connection.query("SELECT * FROM actor WHERE actor_id = 193;", function(error, results){
    //     if (error) {
    //         throw new Error(error)
    //     }
    //     console.log(results)
    // })
// })

// const init = async () => {
//     const [results] = await connection.promise().query("SELECT * FROM actor WHERE actor_id = 193;")
//     console.log(results)
// }

//custom promise
// const myQuery = (sql) => {
//     return new Promise((resolve, reject) => {
//         connection.query(sql, function(error, results){
//             if (error) {
//                 reject(error)
//             }
//             resolve(results)
//         })
//     })
// }

// const init = async () => {
//     await connection.promise().query(`UPDATE actor SET last_name = "BBBBBB" WHERE actor_id = 193;`)

//     const [results] = await connection.promise().query("SELECT * FROM actor WHERE actor_id = 193;")
    
//     console.log(results)
// }

// import mysql from 'mysql2'

// const connection = mysql.createConnection({
//     host: 'localhost',
//     user: 'root',
//     password: 'ILikeButts!',
//     database: 'sakila'
// })

// const init = async () => {
//     // await connection.promise().query(`UPDATE actor SET last_name = "BBBBBB" WHERE actor_id = 193;`)
//     const tableName = "actor"
//     const first_name = "BURT";
//     const last_name = "BBBBBB"

//     const [results] = await connection.promise().query(
//         "SELECT * FROM ?? WHERE first_name = ? AND last_name = ?;",
//         [tableName, first_name, last_name]
//         )
    
//     console.log(results)
// }

// init()
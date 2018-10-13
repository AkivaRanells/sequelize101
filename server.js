const Sequelize = require ('sequelize') ;
const sequelize = new Sequelize('mysql://sql7260485:jX2nX1md7W@sql7.freesqldatabase.com:3306/sql7260485');
sequelize.authenticate()
.then(()=>{
    console.log('Connection established');
})
.catch(err=>{
    console.error('Unable to connect');
})

const Stock = sequelize.define('stock',{
    ticker: {
        type: Sequelize.STRING
    },
    date: {
        type: Sequelize.DATE
    },
    open: {
        type: Sequelize.FLOAT
    },
    close: {
        type: Sequelize.FLOAT
    }
})

// Stock.sync()
// if we want to drop existing 
//Stock.sync({force: true})

//create
// Stock.create({
//     ticker: "MSFT",
//     date: new Date(),
//     open: 270.03,
//     close: 281.98
// })

// Stock.create({
//     ticker: "TSLA",
//     date: new Date(),
//     open: 270.03,
//     close: 281.98
// })

// Stock.create({
//     ticker: "TSLA",
//     date: new Date(), //assume this was created at a later date
//     open: 284.14,
//     close: 290.33
// })

//read
// Stock.findAll({attributes: ["ticker", "open"]}).then(stocks=>{
//     console.log(stocks)
// })

// Stock.findAll({where: {ticker: "TSLA"}}).then(stocks=>{
//     console.log(stocks)
// })

//alternate syntax for above query
//define our filter
// let filter = {
//     where: {
//         ticker: "TSLA"
//     }
// }
//create the query with the filter
// let query = Stock.findAll(filter)
//execute the query and use the result
// query.then(stocks =>{
//     console.log(stocks)
// })

// Stock.findAll({
//     where:{
//         ticker: "TSLA",
//         open: {
//             $lte: 260
//         }
//     }
// }).then(stocks=>{console.log(stocks)})

// Stock.findAll({
//     where: {
//         ticker: "TSLA",
//         close: {
//             $gte: 90
//         }
//     }
// }).then(stocks => {
//     console.log(stocks)
// })

// Stock.findAll({
//     where: {
//         $or: [
//             {ticker: "TSLA"},
//             {ticker: "MSFT"}
//         ]
//     }
// }).then(stocks => {
//     console.log(stocks)
// })

// Stock.findAll({
//     where: {
//      ticker: "MSFT",    
//         $and: [
//             {open: {
//                 $gte: 90
//             }},
//             {open:{
//                 $lte: 120
//             }}
//         ]
//     }
// }).then(stocks => {
//     console.log(stocks)
// })

//update
// Stock.update(
//     {ticker: 'MSFT'},
//     {
//         where:{
//             open: {
//                 gt: 271
//             }
//         }
//     }
// )

//delete

// Stock.destroy({
//     where: {
//         ticker: "MSFT"
//     }
// })

//relationships
//one to many

const Song = sequelize.define('song',{
    title: Sequelize.STRING
})

const Artist = sequelize.define('artist', {
    first_name: Sequelize.STRING
})

Artist.hasMany(Song)
// Artist.sync()
// Song.sync()

// Artist.create({ first_name: "Stephan Legar"});
// Artist.create({first_name: "Cher"});
// Artist.create({first_name: "Eric Clapton"});

// Song.create({
//     title: "Step Fun",
//     artistId: 1
// })

// Song.create({
//     title: "Comme ci comme ca",
//     artistId: 1
// })

// Song.create({
//     title: "Believe",
//     artistId: 2
// })

// Song.create({
//     title: "Layla",
//     artistId: 3
// })

// Song.create({
//     title: "Cocaine",
//     artistId: 3
// })

// Artist.find({
//     where: {id: 1},
//     include: [Song]
// }).then(artist=>{
//     console.log(artist.songs)
// })

//many to many relationships

const Store = sequelize.define("store", {
    name: Sequelize.STRING
})

const Customer = sequelize.define("customer", {
    name: Sequelize.STRING
})

const Store_Customer = sequelize.define("Store_Customer", {})

Store.belongsToMany(Customer, { through: Store_Customer })
Customer.belongsToMany(Store, { through: Store_Customer })

// Store.sync()
// Customer.sync()
// Store_Customer.sync()

// const addRelationship = async function () {
//     let store = await Store.create({ name: "Target" })
//     let customer = await Customer.create({ name: "Julius" })
//     store.addCustomer(customer)
//     //alternatively, could also do customer.addStore(store)
// }

// addRelationship()

// Store.find({where: {id: 1}, include: [Customer]})
// .then(s=>{console.log(s)})
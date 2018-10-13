const Sequelize = require ('sequelize');
const sequelize = new Sequelize('mysql://sql7260485:jX2nX1md7W@sql7.freesqldatabase.com:3306/sql7260485');
// sequelize.authenticate()
// .then(()=>{
//     console.log('Connection established')
// })
// .catch(err=>{
//     console.error('Unable to cconnect')
// });

const Movie = sequelize.define('Movie',{
    movie_title: Sequelize.STRING
})

const Actor = sequelize.define('Actor', {
    actor_name: Sequelize.STRING
})

const Director = sequelize.define('Director', {
    director_name: Sequelize.STRING
})

const Actor_Movie = sequelize.define('Actor_Movie', {})

Actor.belongsToMany(Movie, {through: Actor_Movie})
Movie.belongsToMany(Actor, {through: Actor_Movie})
Director.hasMany(Movie)
// Director needs to be created first so movie can reference the already created id
// Director.sync()
// Movie.sync()
// Actor.sync()
// Actor_Movie.sync()

// Director.create({director_name:"Rob Minkoff"})
// Director.create({director_name:"Peter Jackson"})

// const addRelationship = async function(){
//     let actor = await Actor.create({actor_name: "James Earl Jones"});
//     let actor_two = await Actor.create({actor_name: "Jeremy Irons"});
//     let movie = await Movie.create({movie_title: "Lion King", DirectorId: 1});
//     actor.addMovie(movie);
//     actor_two.addMovie(movie);
// }

// addRelationship()

// const addRelationship = async function(){
//     let actor = await Actor.find({where:{actor_name: "Ian McKellen"}});
//     let actor_two = await Actor.find({where: {actor_name: "Jeremy Irons"}});
//     let movie = await Movie.create({movie_title: "Lord of the Lions", DirectorId:2});
//     actor.addMovie(movie);
//     actor_two.addMovie(movie);
// }

// addRelationship()

// Movie.findAll({where: {DirectorId: 2}, include:[Actor]})
// .then(m=>{console.log(m);})

// Actor.find({where: {actor_name:"Ian Mckellen"},
//     include:[{
//         model: Movie, 
//         through:{
//             attributes: ['movie_title'],
//             raw: true
//         }
//     }]
// }).then(m=>console.log(m.get({plain:true})));

// Movie.find({where: {movie_title: "Lord of the Rings"},
//     include:[{
//         model: Actor,
//         through:{
//             attributes: ['actor_name'],
//             raw: false
//         }
//     }]
// }).then(m=>{console.log(m.get({plain:true}))})

Director.findAll({
    include:
    [{
        model: Movie, 
        where: {movie_title: "Lord of the Rings"}
    }]
}).then(m=>m.map(d=>console.log(d.get({plain: true}))));



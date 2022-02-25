import Hero from '../models/Hero.js';

// let HEROES = [
//     // {
//     //     id: "10",
//     //     name: "Mohammad"
//     // }
// ];

// export const oldgetHeroes = (req, res) => {
//     console.log(HEROES);
//     res.send(HEROES);
// }
let i = 0
export const getHeroes = async (req, res) => {
	const heroes = await Hero.find()
	res.send(heroes)
    i=i+1
    console.log('server accessed'+i)
}

// export const oldcreateHero = (req, res) => {
//     const name = req.body.name;
//     const id = Math.floor(Math.random()*100+HEROES.length+1);
//     HEROES.push({name, id});
//     res.send(HEROES);
// }

export const createHero = async (req, res) => {
    const hero = new Hero({
        name: req.body.name
    })
    await hero.save()
    res.send(hero)
}

// export const oldgetHero = (req, res) => {
//     const id = req.params.id;
//     res.send(HEROES.find((hero) => hero.id == id));
// }

export const getHero = async (req, res) => {
	try {
		const hero = await Hero.findOne({ _id: req.params.id })
		res.send(hero)
	} catch {
		res.status(404)
		res.send({ error: "Hero doesn't exist!" })
	}
}

// export const olddeleteHero = (req, res) => {
//     const id = req.params.id;
//     HEROES = HEROES.filter((hero) => hero.id != id);
//     res.send(HEROES);
// }

export const deleteHero = async (req, res) => {
	try {
		await Hero.deleteOne({ _id: req.params.id })
		res.status(204).send()
	} catch {
		res.status(404)
		res.send({ error: "Hero doesn't exist!" })
	}
}

// export const oldupdateHero = (req, res) => {
//     const id = req.params.id;
//     const hero = HEROES.find((hero) => hero.id == id);
//     const {name} = req.body;
//     if (name) hero.name = name;
//     res.send(HEROES);
// }

export const updateHero = async (req, res) => {
	try {
		const hero = await Hero.findOne({ _id: req.params.id })

		if (req.body.id) {
			hero.id = req.body.id
		}

		if (req.body.name) {
			hero.name = req.body.name
		}

		await hero.save()
		res.send(hero)
	} catch {
		res.status(404)
		res.send({ error: "Hero doesn't exist!" })
	}
}
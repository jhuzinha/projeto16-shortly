import rankRepository from "../repository/rankRepository.js";

export async function AllUserLinks(req, res){
    const userId = res.locals.id;
    try {
        const allLinks =  await rankRepository.AllUserLinks(userId);
        res.status(200).send(...allLinks.rows)
    } catch (err) {
        console.log(err)
        res.sendStatus(500)
    }
}

export async function rank(req, res){
    try {
        const ranking = await rankRepository.rank();
        res.status(200).send(ranking.rows)
    } catch(err){
        res.sendStatus(500)
    }
}
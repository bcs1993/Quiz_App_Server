import Questions from "../models/questionSchema.js";
import Results from "../models/resultSchema.js";
import questions, { answers } from "../database/data.js";


/** Get all Questions */
export async function getQuestions(req, res) {
    try {
       const q = await Questions.find()
       res.json(q)
    } catch (error) {
        res.json({error})
    }
}

/** Insert all Questions */
export async function insertQuestions(req, res) {
    try {
        Questions.insertMany({questions, answers})
         .then(function(err, data){
            res.json({msg: "Data Saved Successfully...!"})
        })
    }catch(error) {
        res.json({error})
    }
}

/** Delete all Questions */
export async function dropQuestions(req, res) {
    try {
       await Questions.deleteMany()
       res.json({msg: "Data Deleted Successfully...!"})
    }catch(error) {
        res.json({error})
    }
}

/** Get all Results */
export async function getResult(req, res) {
    try {
        const r = await Results.find()
        res.json(r)
    } catch (error) {
        res.json({error})
    } 
}

/** Post all Result */
export async function storeResult(req, res) {
    try {
       const { username, result, attempts, points, achieved } = req.body;
       if (!username && !result) throw new Error('Data Not Provided...!');

       Results.create({username, result, attempts, points, achieved})
       .then(function(err, data){
           res.json({msg: "Results Saved Successfully...!"})
       })
    } catch (error) {
        res.json({error})
    }
}

/** Delete all Result */
export async function dropResult(req, res) {
    try {
        await Results.deleteMany();
        res.json({msg: "Results Deleted Successfully...!"})
    } catch (error) {
        res.json(error)
    }
}
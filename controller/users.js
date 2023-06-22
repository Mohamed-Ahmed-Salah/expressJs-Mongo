import { v4 as uuidv4 } from 'uuid';
import express from 'express';
import { userModel } from '../models/userModel.js';





export const createUser = async (req, res)=>{

    const id=uuidv4(); // ⇨ '9b1deb4d-3b7d-4bad-9bdd-2b0d7b3dcb6d'


    const userWithId={...req.body,"id":id}
    const user=await userModel.create(userWithId);



    

res.send(user);

    }


    export const getUsers= async(req, res)=>{

        const users=await userModel.find({});
        res.send(users);
        
        }


        export const getUserById = async(req, res)=>{

            // const id= req.params.id;
            const {id}= req.params;
    
           const foundUSer= await userModel.findById(id);
    
    
            res.send(foundUSer);
            
            }


          export  const deleteUser = async(req, res)=>{

                // const id= req.params.id;
                const {id}= req.params;
        
               const foundUSer= userModel.findByIdAndDelete(id);
        
               if(foundUSer!=null){
                res.status(200).send("success");
    
               }
        else{
            res.status(404).send("failed not found");
    
        }
                
                }


                export const editUser = async(req, res)=>{

                    // const id= req.params.id;
                    const {id}= req.params;
                    const {fname,lname,age}= req.body;
    
                   const foundUSer= await userModel.findByIdAndUpdate(id, req.body);
            
                   if(foundUSer!=null){
    
    
                    // if(fname){
                    //     foundUSer.name=fname
                    // }
                    
                    // if(age){
                    //     foundUSer.age=age
                    // }
                    
                    // if(lname){
                    //     foundUSer.last_name=lname
                    // }
    
                  //  users.pop(foundUSer);
                    res.send("success");
        
                   }
            else{
                res.status(404).send("failed not found");
        
            }
                    
                    }
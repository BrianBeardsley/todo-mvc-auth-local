module.exports = {
    postAscii: async (req, res)=>{
        console.log(req.body.asciiName + ' = asciiName')
        console.log(req.body.asciiFile + ' = asciiFile')
        console.log(req.body.asciiFile.data + ' = asciiFile')
        console.log(res.body + ' response')
        try{

            res.render('index.ejs')
        }catch(err){
            console.log(err)
        }
    }

    // getTodos: async (req,res)=>{
    //     console.log(req.user)
    //     try{
    //         const todoItems = await Todo.find({userId:req.user.id})
    //         const itemsLeft = await Todo.countDocuments({userId:req.user.id,completed: false})
    //         res.render('userPage.ejs', {todos: todoItems, left: itemsLeft, user: req.user})
    //     }catch(err){
    //         console.log(err)
    //     }
    // },
    // createTodo: async (req, res)=>{
    //     try{
    //         await Todo.create({todo: req.body.todoItem, completed: false, userId: req.user.id})
    //         console.log('Todo has been added!')
    //         res.redirect('/userPage')
    //         for(let i = 0; i < req.body.length; i++){
    //             console.log("asld;kfjals;kdjflkj")
    //         }
    //     }catch(err){
    //         console.log(err)
    //     }
    // },
    // markComplete: async (req, res)=>{
    //     try{
    //         await Todo.findOneAndUpdate({_id:req.body.todoIdFromJSFile},{
    //             completed: true
    //         })
    //         console.log('Marked Complete')
    //         res.json('Marked Complete')
    //     }catch(err){
    //         console.log(err)
    //     }
    // },
    // markIncomplete: async (req, res)=>{
    //     try{
    //         await Todo.findOneAndUpdate({_id:req.body.todoIdFromJSFile},{
    //             completed: false
    //         })
    //         console.log('Marked Incomplete')
    //         res.json('Marked Incomplete')
    //     }catch(err){
    //         console.log(err)
    //     }
    // },
    // deleteTodo: async (req, res)=>{
    //     console.log(req.body.todoIdFromJSFile)
    //     try{
    //         await Todo.findOneAndDelete({_id:req.body.todoIdFromJSFile})
    //         console.log('Deleted Todo')
    //         res.json('Deleted It')
    //     }catch(err){
    //         console.log(err)
    //     }
    // }
}
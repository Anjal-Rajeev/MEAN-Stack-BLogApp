const mongoose = require ('mongoose')
mongoose.connect('mongodb+srv://AnjalRajeev:anjalrajeev@cluster0.cgp2vwd.mongodb.net/caseStudyDB?retryWrites=true&w=majority')

.then(()=>{
    console.log('-------mongodb connected successfully-------')
})
.catch((error)=>{
    console.log(error.message)
}) 
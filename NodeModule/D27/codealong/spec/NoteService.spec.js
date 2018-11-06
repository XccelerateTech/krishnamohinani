const NoteService = require('../NoteService')
const fs = require('fs');



describe('Testing NoteService',function(){
    
    beforeEach(function(){
        if(fs.existsSync('test.json')){
            fs.unlinkSync('test.json');
        }
        fs.writeFileSync('test.json','[]')
    })
    
    
    
    it('list our notes using listNote()',function(done){
        const noteService = new NoteService('test.json');
        noteService.listNote().then((result)=>{
            expect(result).toEqual([]);
            done();
        }).catch((err)=>{
            done.fail(err);
        });
    });

    it('add a note using addNote()',function(done){
        const noteService = new NoteService('test.json');
        noteService.addNote('test').then(()=>{
            return noteService.listNote();
        }).then((result)=>{
            expect(result).toEqual(['test']);
            done();
        }).catch((err)=>{
            done.fail(err);
        });
    });

    it('should be able to add more than one note using addNote()',function(done){
        const noteService = new NoteService('test.json');
        noteService.addNote('test').then(()=>{
            return noteService.addNote('test1').then(()=>{
                return noteService.listNote();
            }).then((result)=>{
                expect(result).toEqual(['test','test1']);
                done();
        
                }).catch((err)=>{
                    done.fail(err);
        
            });
     

        });
    });

    it('add notes before listing notes',function(done){
        const noteService = new NoteService('test.json');
        noteService.addNote('test').then(()=>{
            const noteService2 = new NoteService('test.json');
            return noteService2.addNote('test2').then(()=>{
                return noteService2.listNote();
            }).then((result)=>{
                expect(result).toEqual(['test','test2'])
                done();
            }).catch((err)=>{
                done.fail(err);
            }).catch((err)=>{
                done.fail(err);
            })
        })
    })

});
describe("exercise with 5 blocks", function() {
    it("should display block 1 and pass",function(){
        console.log("I am the it block number 1");
    });
    it("should display block 2 and pass",function(){
        console.log("I am the it block number 2");
    });
    it("should display block 3 and pass",function(){
        console.log("I am the it block number 3");
    });
    it("should display block 4 and pass",function(){
        console.log("I am the it block number 4");
    });
    it("should display block 5 and fail",function(){
        console.log("I am the it block number 5 but I fail");
        throw new Error();
    });
});
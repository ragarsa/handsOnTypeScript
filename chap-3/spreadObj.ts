namespace NamespaceA {

    class A {
        aname: string = 'A';
    
        go() {
            console.log(this.aname);
        }
    
    }
    
    class B {
        bname:string = 'B';
        go() {
            console.log(this.bname);
        }
    }

    const a = new A(); 
    const b = new B(); 
    const c = {...a, ...b}
    const d = Object.assign(a,b);
    console.log(c);
    console.log(d);

    a.aname = 'a1';
    console.log(c);
    console.log(d);

}
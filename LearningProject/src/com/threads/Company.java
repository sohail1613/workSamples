package com.threads;

public class Company {
    int n;  //when value assigned to n, means produced
    boolean f = false;
    //if false then chance of producer to produce
    //if true then chance of consumer to consume

    //using synchronized keyword for both methods
    //to use synchronized keyword , so when produce then consumer wait and vice-versa
    synchronized public void produce_item(int n) throws Exception{
        if (f){
            wait();
        }
        this.n = n ; //data produced
        System.out.println("Produced :"+this.n);
        f = true;
        notify();
    }

    synchronized public int consume_item() throws Exception{
        if (!f){
            wait();
        }
        System.out.println("Consumed :"+this.n);
        f=false;
        notify();
        return this.n;
    }
}

package com.threads;

//to make it thread simply use extends keyword
public class Producer extends Thread {
    //we need company object to produce item
    Company company;
    Producer(Company company){
        this.company=company;
    }
    public void run(){
        int i = 1;
        while(true){
            try {
                this.company.produce_item(i);
            } catch (Exception e) {
                throw new RuntimeException(e);
            }
            try{Thread.sleep(1000);} catch (Exception e){}
            i++;
        }
    }
}

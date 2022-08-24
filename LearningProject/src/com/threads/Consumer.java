package com.threads;

public class Consumer extends Thread{
    Company company;
    Consumer(Company company){
        this.company=company;
    }
    @Override
    public void run() {
        while(true){
            try {
                this.company.consume_item();
            } catch (Exception e) {
                throw new RuntimeException(e);
            }
            try{Thread.sleep(2000);} catch (Exception e){}
        }
    }
}

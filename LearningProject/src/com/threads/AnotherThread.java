package com.threads;

//creating thread using thread class
public class AnotherThread extends Thread{
    @Override
    public void run() {
//        super.run();
        //task for thread
        for (int i=10; i>=1; i--){
            System.out.println("Another thread is :"+i);
            try{
                Thread.sleep(2000);
            } catch (Exception e){

            }
        }
    }
}

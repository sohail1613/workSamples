package com.threads;
//creating thread using Runnable interface
public class MyThread implements Runnable{
    @Override
    public void run() {
        //task for thread
        for (int i=1; i<=10; i++){
            System.out.println("value of i is :"+i);
            try{
                Thread.sleep(1000);
            } catch (Exception e){

            }
        }
    }

    public static void main(String[] args) {
        //creating object of MyThread
        MyThread myThread = new MyThread();

        //creating helper class object
        Thread thread = new Thread(myThread);
//        thread.start();

        //crating object of AnotherThread
        AnotherThread anotherThread = new AnotherThread();
        thread.start();
        anotherThread.start();
    }
}

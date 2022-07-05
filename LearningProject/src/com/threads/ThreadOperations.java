package com.threads;

class UserThread extends Thread{
    @Override
    public void run() {
        System.out.println("User defined thread.");
    }
}

public class ThreadOperations {
    public static void main(String[] args) {
        System.out.println("Program started..");
        int x = 56+34;
        System.out.println("Sum is :"+x);

        //Thread
        Thread thread = Thread .currentThread();
        String threadName = thread.getName();
        System.out.println("Current thread name is :"+threadName);

        //we can rename thread using setName method
        thread.setName("Experimental Thread");
        //and to print thread name use get method
        System.out.println(thread.getName());
        //to make is sleep
        try{
            Thread.sleep(3000);
        } catch (Exception e){

        }

        //to get threadId
        System.out.println(thread.getId()); //cause reference variable is thread

        //to start user defined thread
        UserThread userThread = new UserThread();
        userThread.start();

        System.out.println("Program ended...");
    }
}

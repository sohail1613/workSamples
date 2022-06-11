package com.clock;

import javax.swing.*;
import java.awt.*;
import java.awt.event.ActionEvent;
import java.awt.event.ActionListener;
import java.sql.Date;
import java.text.SimpleDateFormat;

public class Clock extends JFrame {
    private JLabel heading;
    private JLabel clockLabel;
    private Font font = new Font("The New Times Roman", Font.BOLD, 45);
    public Clock(){
        super.setTitle("Clock");
        super.setSize(400, 500);
        super.setLocation(950, 90);
        super.setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
        this.crateGUI();
        this.clockStart();
        super.setVisible(true);
    }

    public void crateGUI() {
        heading = new JLabel("Clock");
        clockLabel= new JLabel("First Clock");

        heading.setFont(font);
        clockLabel.setFont(font);

        this.setLayout(new GridLayout(2, 1));
        this.add(heading);
        this.add(clockLabel);
    }

    public void clockStart(){
        Timer timer = new Timer(1000, new ActionListener() {
            @Override
            public void actionPerformed(ActionEvent e) {

                long millis = System.currentTimeMillis();
                Date date = new Date(millis);
                System.out.println(date);
                SimpleDateFormat simpleDateFormat = new SimpleDateFormat("hh : mm : ss");
                String dateTime = simpleDateFormat.format(date);
                clockLabel.setText(dateTime);
            }
        });
        timer.start();
    }
}

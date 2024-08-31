package com.example.myapplication;

import android.os.Bundle;
import android.util.Log;
import android.view.View;
import android.widget.Button;
import android.widget.EditText;
import android.widget.TextView;
import android.widget.Toast;

import androidx.appcompat.app.AppCompatActivity;
import com.google.firebase.firestore.FirebaseFirestore;
import com.google.firebase.firestore.FirebaseFirestoreException;
import com.google.firebase.firestore.FirebaseFirestoreSettings;

public class MainActivity extends AppCompatActivity {

    private FirebaseFirestore db;
    private TextView statusTextView;
    private EditText inputEditText;
    private Button submitButton;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);

        // Initialize Firestore and UI elements
        db = FirebaseFirestore.getInstance();
        statusTextView = findViewById(R.id.statusTextView);
        inputEditText = findViewById(R.id.inputEditText);
        submitButton = findViewById(R.id.submitButton);

        // Check Firebase connection on start
        checkFirebaseConnection();

        // Set button click listener
        submitButton.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                // Send input to Firestore on button click
                sendDataToFirestore();
            }
        });
    }

    private void checkFirebaseConnection() {
        FirebaseFirestoreSettings settings = new FirebaseFirestoreSettings.Builder()
                .setPersistenceEnabled(true)
                .build();
        db.setFirestoreSettings(settings);

        db.collection("all").limit(1).get().addOnCompleteListener(task -> {
            if (task.isSuccessful()) {
                statusTextView.setText("Connected to Firebase");
            } else {
                statusTextView.setText("Failed to connect to Firebase");
                Log.e("FirebaseConnection", "Error: ", task.getException());
            }
        });
    }

    private void sendDataToFirestore() {
        String userInput = inputEditText.getText().toString().trim();
        if (!userInput.isEmpty()) {
            db.collection("all")
                    .add(new UserInput(userInput))
                    .addOnSuccessListener(documentReference -> {
                        Toast.makeText(MainActivity.this, "Data added successfully", Toast.LENGTH_SHORT).show();
                        inputEditText.setText(""); // Clear input field
                    })
                    .addOnFailureListener(e -> {
                        Toast.makeText(MainActivity.this, "Failed to add data", Toast.LENGTH_SHORT).show();
                        Log.e("FirestoreError", "Error adding document", e);
                    });
        } else {
            Toast.makeText(this, "Please enter some text", Toast.LENGTH_SHORT).show();
        }
    }

    // Class to structure the data sent to Firestore
    public class UserInput {
        private String userInput;

        public UserInput(String userInput) {
            this.userInput = userInput;
        }

        public String getUserInput() {
            return userInput;
        }

        public void setUserInput(String userInput) {
            this.userInput = userInput;
        }
    }
}

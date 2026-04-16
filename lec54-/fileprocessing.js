// ---------- Callback Hell Style ----------
function fileProcessingHell() {
    console.log("Starting File Processing...");

    setTimeout(() => {
        console.log("1️⃣ Reading file...");
        
        setTimeout(() => {
            console.log("2️⃣ Validating file...");

            setTimeout(() => {
                console.log("3️⃣ Processing file...");

                setTimeout(() => {
                    console.log("4️⃣ Saving processed file...");

                    setTimeout(() => {
                        console.log("5️⃣ Logging & cleanup...");
                        console.log("🎉 File Operation Completed (HELL VERSION)");
                    }, 1000);

                }, 1000);

            }, 1000);

        }, 1000);

    }, 1000);
}

// fileProcessingHell();


// ---------- Proper Managed Callback Approach ----------
function readFile(callback) {
    console.log("1️⃣ Reading file...");
    setTimeout(() => {
        callback(null, "FILE_DATA_123");
    }, 1000);
}

function validateFile(data, callback) {
    console.log("2️⃣ Validating file...");

    setTimeout(() => {
        const isValid = true;      // assume we validate
        if (!isValid) return callback("❌ File Validation Failed", null);
        callback(null, data + "_VALID");
    }, 1000);
}

function processFile(validFile, callback) {
    console.log("3️⃣ Processing file...");

    setTimeout(() => {
        callback(null, validFile + "_PROCESSED");
    }, 1000);
}

function saveFile(processedFile, callback) {
    console.log("4️⃣ Saving processed file...");

    setTimeout(() => {
        callback(null, processedFile + "_SAVED");
    }, 1000);
}

function logCompletion(finalData, callback) {
    console.log("5️⃣ Logging & cleanup...");
    setTimeout(() => {
        callback(null, finalData);
    }, 1000);
}


// ---------- Error-First Callback Flow ----------
function startFileProcessing() {
    console.log("🚀 Starting File Processing...");

    readFile((err, data) => {
        if (err) return console.error(err);

        validateFile(data, (err, validData) => {
            if (err) return console.error(err);

            processFile(validData, (err, processed) => {
                if (err) return console.error(err);

                saveFile(processed, (err, saved) => {
                    if (err) return console.error(err);

                    logCompletion(saved, (err, finalResult) => {
                        if (err) return console.error(err);

                        console.log("🎉 File Operation Completed Successfully");
                        console.log("Final Output:", finalResult);
                    });
                });
            });
        });
    });
}

startFileProcessing();

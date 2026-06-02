# 🏧 CLI ATM Machine

An interactive, command-line based Automated Teller Machine (ATM) simulator built with TypeScript and Node.js. It features secure PIN authentication, real-time balance checking, and smart withdrawal safety limits.

---

## ✨ Features

* **Secure PIN Authentication:** Simulates a real banking login verification system.
* **Smart Withdrawal Validation:** Prevents over-drafting by checking if the requested amount exceeds the current balance.
* **Interactive Options Menu:** Clean navigation between functions using the `inquirer` list prompt.
* **Vibrant Interface:** Error messages and success logs are clearly highlighted using `chalk`.

---

## 🛠️ Architecture Flow

The logic follows a conditional security clearing structure:

$$\text{Authentication Check} \rightarrow \text{Select Operation} \rightarrow \begin{cases} \text{Check Balance} \\ \text{Withdraw Amount} \rightarrow (\text{Amount} \le \text{Balance}) \end{cases}$$

---

## 🚀 How to Run & Use

1. Navigate to the project folder in your terminal.
2. Install the necessary Node packages:
   ```bash
   npm install inquirer chalk

3. Compile and run the application:

```bash
npx tsc && node index.js

# Product Requirements Document (PRD) - TODO App Upgrade

## 1. Overview

Upgrade the basic TODO app so users can organize tasks by deadline and priority. The MVP adds optional due dates, three priority levels, and date-based filters while keeping data local and the implementation simple. Overdue highlighting and automatic task sorting are deferred to Post-MVP.

---

## 2. MVP Scope

- Continue requiring a task title.
- Add an optional `dueDate` using ISO `YYYY-MM-DD` format. Invalid dates are ignored and treated as absent.
- Add a `priority` value of `P1`, `P2`, or `P3`, defaulting to `P3`.
- Display priority badges using the colors requested in the requirements meeting: red for P1, orange for P2, and gray for P3.
- Provide **All**, **Today**, and **Overdue** filters.
- Show completed and incomplete tasks in **All**. Show only incomplete tasks in **Today** and **Overdue**.
- Keep task data in local storage; do not add backend changes or external storage.

---

## 3. Post-MVP Scope

- Visually highlight overdue tasks.
- Sort tasks in this order: overdue first, then priority (`P1` to `P3`), then due date ascending, with tasks without due dates last.

---

## 4. Out of Scope

- Notifications.
- Recurring tasks.
- Multi-user support.
- Keyboard navigation or additional special accessibility features.
- Backend changes or external storage.
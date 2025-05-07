import Task from "../models/Task.js";

export const createTask = async (req, res) => {
    const { title } = req.body;
    try {
        const task = await Task.create({ title});
        res.status(201).json(task);
    } catch (error) {
        res.status(400).json({ error: err.message })
    }
};

export const getTasks = async (req, res) => {
    try {
        const tasks = await Task.find();
        res.status(200).json(tasks);
    } catch (error) {
        res.status(500).json({ error: err.message });
    }
};

export const updateTask = async (req, res) => {
    const { id } = req.params;
    const { title, completed } = req.body;
    try {
        const task = await Task.findByIdAndUpdate(id, { title, completed }, { new: true });
        res.status(200).json(task);
    } catch (error) {
        res.status(400).json({ message: "Task Not Found" });
    }
};

export const deleteTask = async (req, res) => {
    const { id } = req.params;
    try {
        const task = await Task.findByIdAndDelete(id);
        if (!task) {
            return res.status(404).json({ message: "Task NOt Found" })
        }
        res.status(200).json({ message: "Task Deleted Successfully" } )
    } catch (error) {
        res.status(500).json({ message: "Server Error" });
    }
}
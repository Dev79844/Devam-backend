const express = require('express')
const Phone = require('../models/phone')

exports.addPhone = async(req,res) => {
    try {
        const {name,model,warranty, accessories, battery} = req.body
        await Phone.create({
            name,
            model,
            warranty,
            accessories,
            battery,
            createdAt: new Date()
        })

        const response = await Phone.find({})

        res.status(200).json(response)
    } catch (error) {
        console.log(error)
    }
}

exports.getPhones = async(req,res) => {
    try {
        const response = await Phone.find({})

        res.status(200).json(response)
    } catch (error) {
        console.log(error)
    }
}

exports.getPhone = async(req,res) => {
    try {
        const id = req.params.id

        const data = await Phone.findById(id);

        res.status(200).json(data)
    } catch (error) {
        console.log(error)
    }
}

exports.deletePhone = async(req,res) => {
    try {
        const id = req.params.id

        const data = await Phone.findByIdAndDelete(id)

        res.status(200).json(data)
    } catch (error) {
        console.log(error)
    }
}
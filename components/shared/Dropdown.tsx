import React from "react"
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
  } from "@/components/ui/select"
  type DropdownProps = {
    value?: string
    onChangeHandler?: () => void
  }
  
  const Dropdown = ({ value, onChangeHandler }: DropdownProps) => {
    return (
      <Select onValueChange={onChangeHandler} defaultValue={value}>
        <SelectTrigger className="select-field">
          <SelectValue placeholder="Gender" />
        </SelectTrigger>
        <SelectContent>
            <SelectItem value="Male">Male</SelectItem>
            <SelectItem value="Female">Female</SelectItem>
        </SelectContent>
      </Select>
    )
  }
  
  export default Dropdown
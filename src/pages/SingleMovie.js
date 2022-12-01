import React from 'react'
import { useParams, Link } from "react-router-dom";

export function SingleMovie() {
  const { id } = useParams();

  console.log(id);
}

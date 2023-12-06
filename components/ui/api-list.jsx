"use client"

import { useOrigin } from "@/hooks/use-origins";
import {useParams} from "next/navigation";

const ApiList = ({entityName,entityIdName}) => {
  const params = useParams();
  const origin = useOrigin();
  
}
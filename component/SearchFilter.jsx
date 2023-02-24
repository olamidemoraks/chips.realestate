import { useEffect, useState } from "react";
import {
  Flex,
  Box,
  Icon,
  Text,
  Input,
  Spinner,
  Select,
  Button,
} from "@chakra-ui/react";
import { useRouter } from "next/router";
import { MdCancel } from "react-icons/md";
import Image from "next/image";
import { filterData, getFilterValues } from "../utils/filterData";

const SearchFilter = () => {
  const [filter, setFilter] = useState(filterData);
  const router = useRouter();

  const searchProperties = (filterValues) => {
    console.log(filterValues);

    const path = router.pathname;
    const { query } = router;
    console.log("query1", query);

    const values = getFilterValues(filterValues);
    values.forEach((item) => {
      console.log(filterValues?.[item.name]);
      if (item.value && filterValues?.[item.name])
        query[item.name] = item.value;
    });
    console.log("query2", path, query);

    router.push({ pathname: path, query });
  };

  return (
    <Flex bg={"gray.100"} justifyContent="center" flexWrap={"wrap"}>
      {filter.map((filter) => (
        <Box key={filter.queryName}>
          <Select
            placeholder={filter.placeholder}
            w="fit-content"
            p="2"
            onChange={(e) =>
              searchProperties({ [filter.queryName]: e.target.value })
            }
          >
            {filter?.items?.map((item) => (
              <option value={item.value}>{item.name}</option>
            ))}
          </Select>
        </Box>
      ))}
    </Flex>
  );
};

export default SearchFilter;

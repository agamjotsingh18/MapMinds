import * as React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  IconButton,
  Box,
  Menu,
  MenuItem,
  Typography,
  Pagination,
} from "@mui/material";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import FilterAltIcon from "@mui/icons-material/FilterAlt";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import ViewColumnIcon from "@mui/icons-material/ViewColumn";
import { pink } from "@mui/material/colors";
import EditModal from "./EditModal";
import DeleteConfirmationModal from "./DeleteConfirmationModal";
import { useState } from "react";

const initialRows = [
  { id: 1, data: "Do you work on whatsapp? Yes, we do offer our services on WhatsApp!", showMore: false },
  { id: 2, data: "I want to test your chatbot. That's great to hear! You can continue chatting with me to test BeyondChats AI responses! 😏 Else, you can also book a demo call with my team: https://calendly.com/beyondchats/15min", showMore: false },
  { id: 3, data: "Will the Startup Plan address the concern I mentioned earlier? Yes, the Startup Plan will definitely help address your concerns! With this plan, you'll have access to advanced analytics and features that can enhance customer interactions while ensuring data security.", showMore: false },
  { id: 4, data: "What is the cost of IVF? I can’t provide specific information on IVF costs, but I can tell you about how our chatbot services can enhance your business by generating high-quality leads and providing 24/7 support to your customers.", showMore: false },
  { id: 5, data: "Which languages can you talk in? Multilingual support is the core of my AI! I can speak many popular languages. Just talk in the language you are comfortable in! Supported languages include: Regional Indian languages like Hindi, Marathi, Bengali, Tamil, etc. International languages I can speak fluently: German, French, Portuguese, etc.", showMore: false },
  { id: 6, data: "Who are you? My name is Bech! I am an AI chatbot and my job is to help you with any questions you may have about BeyondChats or our services.", showMore: false },

  // New entries
  { id: 7, data: "Do you have live chat support? Yes, we do have live chat support, but we primarily focus on providing chatbot solutions that enhance customer interactions and offer instant responses 24/7.", showMore: false },
  { id: 8, data: "I want to freeze my eggs. That's great, please choose from one of these 3 options.", showMore: false },
  { id: 9, data: "I am trying to get pregnant. We have helped thousands of couples over the years, and we would love to support you too. Please choose from one of these.", showMore: false },
  { id: 10, data: "Who founded BeyondChats? The founders of BeyondChats are Pankaj Baranwal and Simran Jain.", showMore: false },
  { id: 11, data: "How do I get started? To get started, schedule an onboarding call with our experts. They will understand your business and help you integrate the chatbot in 2 minutes. Schedule a short 15-minute connect with one of our experts [here](https://calendly.com/beyondchats/15min).", showMore: false },
  { id: 12, data: "Why choose you? We are not just a conversational chatbot. Our AI builds trust with users and nudges them towards business actions like buying products, requesting demos, etc.", showMore: false },
  { id: 13, data: "What will happen during the onboarding process? During the onboarding process, our experts will understand your business needs and how you want your chatbot to respond. Then they will build the chatbot and share the code within a day. [Book Call Now](https://calendly.com/beyondchats/15min).", showMore: false },
  { id: 14, data: "Registration link? To register for the free trial, book an onboarding call with our team. The team will share the next steps of the registration in the call. [Book Call Now](https://calendly.com/beyondchats/15min).", showMore: false },
  { id: 15, data: "What kind of analytics and reporting features does the chatbot offer? Daily: Leads stats + audience segmentation based on buying intent of users. Weekly & Monthly: Leads stats, Top questions asked by users, Useful Sales Intelligence Analytics.", showMore: false },
  { id: 16, data: "In which company have you provided your chatbot? We have provided our chatbot services to various companies across different industries. These include: MultiBhashi, Selligion, drmalpani.com, indianangel.in. May I know which company/industry you are coming from?", showMore: false },
  { id: 17, data: "Can I cancel my subscription at any time? You may cancel your subscription to BeyondChats at any time. The cancellation will become effective at the end of your current billing cycle. Upon cancellation, your service will remain active until the end of your paid billing term.", showMore: false },
  { id: 18, data: "What are the pricing plans of BeyondChats? We offer 3 different plans: Individual Plan at Rs 1,000 only, Startup Plan at Rs 8,000 only, and Enterprise Plan price based on your requirements. You can subscribe to the paid plans in a monthly or an annual billing cycle. [Know More](https://beyondchats.com/).", showMore: false },
  { id: 19, data: "Contact Details: Please write to contactbeyondchats@gmail.com and we'll get back to you real soon! You can also WhatsApp us by [clicking here](https://wa.me/7289926396).", showMore: false },
  { id: 20, data: "Can the chatbot integrate with our existing CRM system? We already have integrations available for many popular CRMs. For our Success plan users, we also support custom requirements and 3rd party integrations. Share your contact details and our team will get in touch with you to see if we support your CRMs.", showMore: false },
  { id: 21, data: "Do you have a free plan? No, we don't have a free plan but you get a 14-day free trial with all our plans. You can pay once you are satisfied with the chatbot.", showMore: false },
  { id: 22, data: "Who built you? I was created by a team of researchers and engineers dedicated to helping businesses build trust and grow their sales.", showMore: false },
  { id: 23, data: "How can the chatbot help in converting website visitors into leads? From the very second that a user comes to your website, BeyondChats tries to understand what the user wants, builds trust with the user on behalf of your business, and slowly excites the users to buy your product/service. In the background, we generate lots of useful analytics for you to better understand your users.", showMore: false },
  { id: 24, data: "Do you offer Live agents? Our chatbot AI has been able to satisfactorily handle 97% of all user queries in real-time! Much faster and more accurately than any human trained on the same amount of data can. But we are definitely integrating live chat support where your sales team can talk to the visitors directly. If this feature is really important to you, we would be happy to fast-track its integration if you subscribe to the annual plan.", showMore: false },
  { id: 25, data: "What is BeyondChats? We are a chatbot company. We help convert your website traffic into high-quality leads. Our AI excels at building trust with users and nudges them towards business actions like buying your product, scheduling demo calls, etc.", showMore: false },
  { id: 26, data: "What services do you offer? We are a chatbot company. We provide chatbot integrations for your website and help convert your website traffic into high-quality leads! The most common chatbot use cases we help businesses with include: Customer query resolution, brand awareness, promotion of services, lead-generation.", showMore: false },
  { id: 27, data: "Can I integrate the chatbot on Instagram? Not yet but we are definitely working on providing Instagram integration very soon! How important is this for your business? If we see enough demand, we will launch this much sooner!", showMore: false },
  { id: 28, data: "How can I make the payment? We support credit cards, debit cards, prepaid cards, UPI, eMandate, and international cards. How to contact you? Our team is available 24/7 at your service. Email us at: support@beyondchats.com. WhatsApp us at: https://wa.me/917289926396.", showMore: false }
];

const DataTable = () => {
  const [anchorEl, setAnchorEl] = useState(null);
const [menuColumn, setMenuColumn] = useState(null);
  const [sortDirection, setSortDirection] = useState({});
  const [hoveredColumn, setHoveredColumn] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editData, setEditData] = useState("");
  const [isDeleteModalOpen, setDeleteModalOpen] = useState(false);
  const [rows, setRows] = useState(initialRows);
  const [currentPage, setCurrentPage] = useState(1);
  const [rowsPerPage, setRowsPerPage] = useState(8);

//   const open = Boolean(anchorEl);
  const open = Boolean(anchorEl) && menuColumn !== null;


  const handleDeleteClick = () => {
    setDeleteModalOpen(true);
  };

  const handleCloseDeleteModal = () => {
    setDeleteModalOpen(false);
  };

  const handleConfirmDelete = () => {
    // Perform delete action here
    setDeleteModalOpen(false);
    console.log("Data deleted!");
  };

  const handleClick = (event, column) => {
    setAnchorEl(event.currentTarget);
    setMenuColumn(column);
  };

  

  const handleClose = () => {
    setAnchorEl(null);
    setMenuColumn(null);
  };

  const toggleSort = (header) => {
    setSortDirection((prevState) => ({
      ...prevState,
      [header]: prevState[header] === "asc" ? "desc" : "asc",
    }));
  };

  const handleEditClick = (data) => {
    setEditData(data);
    setIsModalOpen(true);
  };

  const handleSave = (updatedData) => {
    // Save the updated data to your state or backend
    console.log("Updated Data:", updatedData);
  };

  const handleShowMoreToggle = (id) => {
    setRows((prevRows) =>
      prevRows.map((row) =>
        row.id === id ? { ...row, showMore: !row.showMore } : row
      )
    );
  };

  const handleChangePage = (event, newPage) => {
    setCurrentPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setCurrentPage(1);
  };

  const startIndex = (currentPage - 1) * rowsPerPage;
  const endIndex = startIndex + rowsPerPage;
  const currentRows = rows.slice(startIndex, endIndex);

  return (
    <>
      <TableContainer component={Paper} sx={{ width: "100%", margin: "0 auto", mt: 4, }}>
        <Table>
          <TableHead>
            <TableRow>
              {["Data", "Source", "Type", "Created At", "Actions"].map((header) => (
                <TableCell
                  key={header}
                  onMouseEnter={() => setHoveredColumn(header)}
                  onMouseLeave={() => setHoveredColumn(null)}
                  sx={{ width: header === "Data" ? "80%" : "5%" }}
                >
                  <Box sx={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                    <Box sx={{ display: "flex", alignItems: "center" }}>
                      {header}
                      <IconButton
                        size="small"
                        sx={{ ml: 1, visibility: hoveredColumn === header ? "visible" : "hidden" }}
                        onClick={() => toggleSort(header)}
                      >
                        {sortDirection[header] === "asc" ? (
                          <ArrowUpwardIcon fontSize="small" />
                        ) : (
                          <ArrowDownwardIcon fontSize="small" />
                        )}
                      </IconButton>
                    </Box>
                    <IconButton
                      size="small"
                      aria-label="more"
                      aria-controls="long-menu"
                      aria-haspopup="true"
                      onClick={(event) => handleClick(event, header)}
                      sx={{ visibility: hoveredColumn === header ? "visible" : "hidden" }}
                    >
                      <MoreVertIcon />
                    </IconButton>
  <Menu
    anchorEl={anchorEl}
    open={open && menuColumn === header} 
    onClose={handleClose}
    PaperProps={{
      style: {
        maxHeight: 50 * 5,
        width: "23ch",
      },
    }}
  >
                      <MenuItem onClick={handleClose}>
                        <ArrowUpwardIcon fontSize="small" sx={{ mr: 1 }} />
                        Sort by ASC
                      </MenuItem>
                      <MenuItem onClick={handleClose}>
                        <ArrowDownwardIcon fontSize="small" sx={{ mr: 1 }} />
                        Sort by DESC
                      </MenuItem>
                      <hr />
                      <MenuItem onClick={handleClose}>
                        <FilterAltIcon fontSize="small" sx={{ mr: 1 }} />
                        Filter
                      </MenuItem>
                      <hr />
                      <MenuItem onClick={handleClose}>
                        <VisibilityOffIcon fontSize="small" sx={{ mr: 1 }} />
                        Hide column
                      </MenuItem>
                      <MenuItem onClick={handleClose}>
                        <ViewColumnIcon fontSize="small" sx={{ mr: 1 }} />
                        Manage columns
                      </MenuItem>
                    </Menu>
                  </Box>
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {currentRows.map((row) => (
              <TableRow key={row.id}>
                <TableCell>
                  <Box>
                    <Typography
                      variant="body2"
                      noWrap={!row.showMore}
                      sx={{ maxWidth: "calc(100% - 30px)", fontSize:"16px" }}
                    >
                      {row.showMore ? row.data : `${row.data.slice(0, 100)}...`}
                    </Typography>
                    {row.data.length > 110 && (
                      <IconButton
                        size="small"
                        onClick={() => handleShowMoreToggle(row.id)}
                        sx={{
                          color: "primary.main",
                          mt: 1,
                          p: 1,
                          borderRadius: "0",
                          "&:hover": {
                            backgroundColor: "transparent",
                          },
                          "&:focus": {
                            outline: "none",
                          },
                        }}
                      >
                        <Typography variant="body" sx={{ ml: 1, fontSize: "0.75rem", fontWeight:"bold" }}>
                          {row.showMore ? "SHOW LESS" : "SHOW MORE"}
                        </Typography>
                        {row.showMore ? <KeyboardArrowUpIcon fontSize="small" /> : <KeyboardArrowDownIcon fontSize="small" />}
                      </IconButton>
                    )}
                  </Box>
                </TableCell>
                <TableCell sx={{ pl: 4 }}>--</TableCell>
                <TableCell>
                  <Box
                    sx={{
                      border: "1px solid",
                      borderColor: "primary.main",
                      borderRadius: "15px",
                      px: 1,
                      py: 0.3,
                      color: "primary.main",
                      display: "inline-flex",
                      alignItems: "center",
                      fontSize: "13px",
                    }}
                    varient="outlined"
                  >
                    TEXT
                  </Box>
                </TableCell>
                <TableCell>07/09/2024</TableCell>
                <TableCell>
                  <IconButton size="small" onClick={() => handleEditClick(row.data)}>
                    <EditIcon fontSize="small" color="primary" />
                  </IconButton>
                  <IconButton size="small">
                    <DeleteIcon fontSize="small" sx={{ color: pink[500] }} onClick={handleDeleteClick} />
                  </IconButton>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <Box sx={{ display: "flex", justifyContent: "center", mt: 2 }}>
        <Pagination
          count={Math.ceil(rows.length / rowsPerPage)}
          page={currentPage}
          onChange={handleChangePage}
          variant=""
          shape="rounded"
          sx={{ 
            borderRadius:"50px",
            "& .MuiPaginationItem-text": {
              fontWeight: "bold",
            },
            "& .MuiPaginationItem-root.Mui-selected": {
              backgroundColor: "primary.main",
              color: "white",
              "& .MuiPaginationItem-text": {
                fontWeight: "bold",
              },
              borderRadius: "50%",
            },
            "& .MuiPaginationItem-root.Mui-selected:hover": {
              backgroundColor: "primary.dark",
              "& .MuiPaginationItem-text": {
                fontWeight: "bold",
              },
              borderRadius: "50%",
            },
          }}
        />
      </Box>
      <EditModal
        open={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        initialData={editData}
        onSave={handleSave}
      />
      <DeleteConfirmationModal
        open={isDeleteModalOpen}
        onClose={handleCloseDeleteModal}
        onConfirm={handleConfirmDelete}
      />
    </>
  );
};

export default DataTable;
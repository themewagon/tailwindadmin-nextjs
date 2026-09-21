"use client";
import React, { useEffect, useState } from "react";
import CardBox from "@/app/components/shared/CardBox";
import TicketFilter from "@/app/components/apps/tickets/TicketFilter";
import TicketListing from "@/app/components/apps/tickets/TicketListing";
import { TicketType } from "@/app/(DashboardLayout)/types/ticket";
import { getStoredTickets, saveTickets } from "@/app/data/client-storage";

const TicketsApp = () => {
  const [tickets, setTickets] = useState<TicketType[]>([]);
  const [filter, setFilter] = useState<string>("total_tickets");
  const [ticketSearch, setTicketSearch] = useState<string>("");

  useEffect(() => {
    setTickets(getStoredTickets());
  }, []);

  const deleteTicket = (id: number) => {
    setTickets((prev) => {
      const updated = prev.filter((ticket) => ticket.Id !== id);
      saveTickets(updated);
      return updated;
    });
  };

  const searchTickets = (text: string) => {
    setTicketSearch(text);
  };  

  return (
    <CardBox>
      <TicketFilter tickets={tickets} setFilter={setFilter} />
      <TicketListing
        tickets={tickets}
        filter={filter}
        ticketSearch={ticketSearch}
        deleteTicket={deleteTicket}
        searchTickets={searchTickets}
      />
    </CardBox>
  );
};

export default TicketsApp;

# bookmark-ui
	-- Created a initial project for bookmark api to manage the bookmarks

# docsify-added
 	-- Include the docsify
	
# Card Componet
	-- Added Card Component to display all the cards available in the application
	-- Also created the service to access the bookmark api to get the card details
	-- On click of the card, Redirection Component will redirect to the original URL (used the service getCardByShort URL of bookmark API to get the bookmark url and redirect to it)
	-- #TODO. now the each card displayed in separate row, need to make it to display in the row and 
		columns and also the make the card to display the image and brief desciption on the card.
	-- Make the Redirectcomponent to enable the redirection for the quick short url and that does not belongs to a any group by checking the expiry date.
	
# Next Step:
	-- Make the Group Component to create a Group and also to display the cards pertaining to that group
	-- For that Create GroupComponent to display all the groups in the system.
	-- Also AddGroupComponent to create a Group
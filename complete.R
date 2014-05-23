complete <- function(directory, id = 1:332) {
  ## 'directory' is a character vector of length 1 indicating
  ## the location of the CSV files
  
  ## 'id' is an integer vector indicating the monitor ID numbers
  ## to be used
  
  ## Return a data frame of the form:
  ## id nobs
  ## 1  117
  ## 2  1041
  ## ...
  ## where 'id' is the monitor ID number and 'nobs' is the
  ## number of complete cases
  completeFrame = data.frame(stringsAsFactors=FALSE)
  #lineNum <- 1
  
  for (i in id)
  {
    length <- nchar(i)
    if (length==1)
      
    {
      fileName <- paste(getwd(),"/",directory,"/",'00',i,".csv",sep="")
    }
    else if (length==2)
    {
      fileName <-paste(getwd(),"/",directory,"/","0",i,".csv",sep="")
    }
    
    else 
    {
      fileName <- paste(getwd(),"/",directory,"/",i,".csv",sep="")
    }
    
    fileName
    data <- read.csv(fileName,header=TRUE)
    oneRow <- c(i,sum(complete.cases(data),na.rm=TRUE))
    
      completeFrame <- rbind(completeFrame,oneRow ) 
  #  lineNum <- lineNum+1
}
colnames(completeFrame) <- c("id","nobs")
completeFrame
}

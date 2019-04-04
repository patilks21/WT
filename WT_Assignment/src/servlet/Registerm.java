package servlet;

import java.io.IOException;
import java.io.PrintWriter;
import java.sql.*;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

/**
 * Servlet implementation class Registerm
 */
@WebServlet("/Registerm")
public class Registerm extends HttpServlet {
	private static final long serialVersionUID = 1L;
       
    /**
     * @see HttpServlet#HttpServlet()
     */
    public Registerm() {
        super();
        // TODO Auto-generated constructor stub
    }

	/**
	 * @see HttpServlet#doGet(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// TODO Auto-generated method stub
		response.getWriter().append("Served at: ").append(request.getContextPath());
	}

	/**
	 * @see HttpServlet#doPost(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// TODO Auto-generated method stub
		doGet(request, response);

	      //  Database credentials
		response.setContentType("text/html");  
		PrintWriter out = response.getWriter();  
		          
		String n=request.getParameter("name");  
		String c=request.getParameter("contact");  
		String m=request.getParameter("message");  
		try {
			
			Class.forName("com.mysql.jdbc.driver");
			Connection conn=DriverManager.getConnection("jdbc:mysql://localhost:3306/mysqljdbc","root","mysql");
			PreparedStatement st = conn.prepareStatement("insert into message values(?, ?,?)"); 
	   
	            st.setString(1, n); 
	            st.setString(2, c); 
	            st.setString(2, m); 
	            st.executeUpdate(); 
	            st.close(); 
	            conn.close(); 
		}
		
		catch(Exception e) {
			
		}
		out.println("message submitted");
	}

}
